import axios from 'axios';
var jwt = require('jsonwebtoken');
export class GenerateToken {
 
    async generate(data: any){
            // var userToken = await axios.post('https://dev-680f7trh.auth0.com/oauth/token', {
            //         headers: { 'content-type': 'application/json' },
            //         client_id:"3CV6uO45d6WYrG2IJiSkan674GSIfouV",
            //         client_secret:"V9OMLXiwrwo2mDy-_FW0K1ia5_LNnjG-g565nRtQEsq7QyOdY9SsHMS03eLvxM4d",
            //         grant_type:"authorization_code",
            //         code_verifier: "CODE_VERIFIER",
            //         code: "AUTHORIZATION_CODE",
            //         id: data ,
            //         exp: 28800
            //     })
            //     .then(function (response) {
            //        // users['token'] = response.data.access_token;
            //         return response.data.access_token;
            //     });
            var userToken = await jwt.sign({
                data: data
              }, 'secret', { expiresIn: 28800 });
            return userToken;
    }
}
export default new GenerateToken();