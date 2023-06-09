const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { auth } = require('./middleware/auth');
const { User } = require("./models/User");
const { Campagin } = require("./models/Campagin");
const ImageModel = require('./models/ImageSchema');
const multer = require('multer');
const router = express.Router();

//application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('uploads'));

//application/json 
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

//storage
const Storage = multer.diskStorage({
  destination: "uploads",
  filename:(req, file, cb)=>{
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage: Storage
}).single('testImage')

const upload_completeImage = multer({
  storage: Storage
}).single('completeImage')

// app.post('/upload', (req, res)=>{
//   upload_completeImage(req, res, (err)=>{
//     if(err){
//       console.log(err)
//     }
//     else{
//       res.send('successfully uploaded'),
//       console.log(req.file),
//       console.log(req.body)
//     }
//   })
// })

// app.get('/', (req, res) => res.send('Hello World!~~ '))

// app.get('/api/hello', (req, res) => res.send('Hello World!~~ '))

app.post('/api/users/updateUser', (req, res) => {
  upload(req, res, (err)=>{
    if(err){
      console.log(err)
    }
    else{
      User.findOneAndUpdate(
        {user_id: req.body.user_id}, 
        {
          "name" : req.body.changed_name, 
          "address" : req.body.changed_address, 
          "email" : req.body.changed_email, 
          "phoneNumber" : req.body.changed_phoneNumber, 
          "avatar_image": {data: req.file.filename, contentType: 'image/jpg'}
        }, (err, user) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
          success: true,
          user_id: req.body.user_id,
          name : req.body.changed_name, 
          address : req.body.changed_address, 
          email : req.body.changed_email, 
          phoneNumber : req.body.changed_phoneNumber, 
        })
      });
    }
  })
})

app.post('/api/campagins/completeUser', (req, res) => {
  upload_completeImage(req, res, (err)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send('successfully uploaded'),
      console.log(req.file),
      console.log(req.body)
    }
  })
})

app.post('/api/campagins/registcompleteUser', (req, res) => {
  Campagin.findOneAndUpdate( {campagin_name: req.body.campagin_name}, 
    {
      $push:{
        "complete_user" : {
          "complete_userId" : req.body.complete_userId,
          "complete_status" : false,
          "complete_imgae" : req.body.complete_imageurl
        }
      }
    }, (err, user) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  });
})

app.post('/api/users/registcompleteCampagin', (req, res) => {
  User.findOneAndUpdate( {user_id: req.body.complete_userId}, 
    {
      $push:{
        "complete_campagin" : {
          "complete_campaginName" : req.body.campagin_name,
          "complete_status" : false, 
          "complete_image" : req.body.complete_imageurl
        }
      }
    }, (err, user) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  });
})

app.post('/api/campagins/deletecompleteUser', (req, res) => {
  Campagin.findOneAndUpdate( {campagin_name: req.body.campagin_name}, 
    {
      $pull:{
        "complete_user" : {
          "complete_userId" : req.body.complete_userId,
          "complete_status" : false,
          "complete_imgae" : req.body.complete_imageurl
        }
      }
    }, (err, campagins) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  });
})

app.post('/api/users/deletecompleteCampagin', (req, res) => {
  User.findOneAndUpdate( {user_id: req.body.complete_userId}, 
    {
      $pull:{
        "complete_campagin" : {
          "complete_campaginName" : req.body.campagin_name,
          "complete_status" : false,
          "complete_image" : req.body.complete_imageurl
        }
      }
    }, (err, campagins) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  });
})

app.post('/api/users/getuserinfo', (req, res) => {
  User.findOne({user_id: req.body.user_id}, (err, user) => {
    if (err) return res.json({ success: false, err })
    res.status(200).json(
      {
        user_id: user.user_id, 
        name: user.name, 
        email: user.email, 
        address: user.address, 
        phoneNumber: user.phoneNumber, 
        havingPoint: user.havingPoint, 
        havingVolunteerTime: user.havingVolunteerTime,
        doingCampagins: user.doingCampagins,
        completeCampagins: user.completeCampagins,
        avatar_image: user.avatar_image,
        register_campagin: user.register_campagin,
        complete_campagin: user.complete_campagin
      })
  });
})

app.post('/api/users/register', (req, res) => {

  //회원 가입 할떄 필요한 정보들을  client에서 가져오면 
  //그것들을  데이터 베이스에 넣어준다. 
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
      name: user.name,
      user_id: user.user_id,
      email: user.email,
      address: user.address,
      phoneNumber: user.phoneNumber
    })
  })
})

app.post('/api/campagins/register', (req, res) => {

  const campagin = new Campagin(req.body)

  campagin.save((err, campaginInfo) => {
    if (err) return res.json( { success: false, err })
    return res.status(200).json({
      campagin_success: true,
      campagin_name: campagin.campagin_name,
      campagin_operatingDate: campagin.campagin_operatingDate,
      campagin_point: campagin.campagin_point,
      campagin_volunteerTimer: campagin.campagin_volunteerTimer
    })
  })
})
app.post('/api/campagins/registUser', (req, res) => {

  Campagin.findOneAndUpdate( {campagin_name: req.body.campagin_name}, 
    {
      $push:{
        "register_user" : {
          "register_userId" : req.body.register_userId,
          "register_status" : false
        }
      }
    }, (err, user) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  });
})

app.post('/api/users/registCampagin', (req, res) => {

  User.findOneAndUpdate( {user_id: req.body.register_userId}, 
    {
      $push:{
        "register_campagin" : {
          "register_campaginName" : req.body.campagin_name,
          "register_status" : false, 
        }
      }
    }, (err, user) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  });
})

app.post('/api/campagins/deleteUser', (req, res) => {

  Campagin.findOneAndUpdate( {campagin_name: req.body.campagin_name}, 
    {
      $pull:{
        "register_user" : {
          "register_userId" : req.body.register_userId,
          "register_status" : false
        }
      }
    }, (err, campagins) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  });
})

app.post('/api/users/deleteCampagin', (req, res) => {
  User.findOneAndUpdate( {user_id: req.body.register_userId}, 
    {
      $pull:{
        "register_campagin" : {
          "register_campaginName" : req.body.campagin_name,
          "register_status" : false,
        }
      }
    }, (err, campagins) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  });
}
)

app.post('/api/campagins/completeUser', (req, res) => {
    upload_completeImage(req, res, (err)=>{
      if(err){
        console.log(err)
      }
      else{
        User.findOneAndUpdate(
          {user_id: req.body.user_id}, 
          {
            "name" : req.body.changed_name, 
            "address" : req.body.changed_address, 
            "email" : req.body.changed_email, 
            "phoneNumber" : req.body.changed_phoneNumber, 
            "avatar_image": {data: req.file.filename, contentType: 'image/jpg'}
          }, (err, user) => {
          if (err) return res.json({ success: false, err })
          return res.status(200).json({
            success: true,
            user_id: req.body.user_id,
            name : req.body.changed_name, 
            address : req.body.changed_address, 
            email : req.body.changed_email, 
            phoneNumber : req.body.changed_phoneNumber, 
          })
        });
      }
    })
  })

app.post('/api/users/completeCampagin', (req, res) => {
  User.findOneAndUpdate( {user_id: req.body.complete_userId}, 
    {
      $push:{
        "complete_campagin" : {
          "complete_campaginName" : req.body.campagin_name,
          "complete_status" : false,
          "complete_image" : req.body.complete_imageurl
        }
      }
    }, (err, user) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  });
})
  // User.findOneAndUpdate( {user_id: req.body.user_id}, 
  //   {
  //     $pop:{
  //       "register_campagin" : 1
  //     }
  //   }, (err, campagins) => {
  //   if (err) return res.json({ success: false, err })
  //   return res.status(200).json({
  //     success: true,
  //   })
  // });

app.post('/api/campagins/getinfo', (req, res) => {
  Campagin.find( (err, campagins) => {
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(campagins);
  })
})

app.post('/api/campagins/getinfoOne', (req, res) => {
  Campagin.findOne( {campagin_name: req.body.campagin_name}, (err, campagins) => {
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(campagins);
  })
})

app.post('/api/users/login', (req, res) => {

  // console.log('ping')
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ user_id: req.body.user_id }, (err, user) => {

    // console.log('user', user)
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 아이디에 해당하는 유저가 없습니다."
      })
    }

    //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
      // console.log('err',err)

      // console.log('isMatch',isMatch)

      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })

      //비밀번호 까지 맞다면 토큰을 생성하기.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // 토큰을 저장한다.  어디에 ?  쿠키 , 로컬스토리지 
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id, user_id: user.user_id, name: user.name, email: user.email, address: user.address, phoneNumber: user.phoneNumber })
      })
    })
  })
})


// role 1 어드민    role 2 특정 부서 어드민 
// role 0 -> 일반유저   role 0이 아니면  관리자 
app.get('/api/users/auth', auth, (req, res) => {
  //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res) => {
  // console.log('req.user', req.user)
  User.findOneAndUpdate({ _id: req.user._id },
    { token: "" }
    , (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
      })
    })
})





const port = 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))