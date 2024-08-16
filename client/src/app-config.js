// .env 파일을 사요하지 않는 경우


// 배포 전 !
// const backendHost = 'http://localhost:8080';



// 배포 후 !
let backendHost;
const hostname = window && window.location && window.location.hostname;

if(hostname === 'localhost'){
    backendHost = 'http://localhost:8080'; //로컬 주소
}else{
    backendHost = 'http://3.23.223.22:8080'; // 배포주소
}


export const API_BASE_URL = `${backendHost}`;
/**
 * 참고
 * window && window.location && window.location.hostname ; 하는 이유 ?
 * - 안정성을 높이기 위해서 
 * 
 * window가 존재하지 않는 경우 
 * - ex) 서버 측 코드 (node.js)에서 실행되는 경우 = window 객체는 존재하지 않음.
 * 
 * window.location 이 존재하지 않는 경우 
 * - ex) 브라우저 환경이 아닌 이유 
 */