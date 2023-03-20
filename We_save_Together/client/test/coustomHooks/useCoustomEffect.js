//useRef를 사용하여 useEffect의 첫 렌더링 실행을 막는 커스텀 훅입니다.

// import { useEffect, useRef } from 'react';

// const useCoustomEffect = (func, deps) => {
// 	const didMount = useRef(false);

// 	useEffect(() => {
// 		if (didMount.current) func();
// 		else didMount.current = true;
// 	}, deps);
// };

// export default useCoustomEffect