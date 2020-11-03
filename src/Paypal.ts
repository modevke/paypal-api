import paypal from 'paypal-rest-sdk'
import { configs } from './configs'
import { ExecuteInterface, TransactionInterface } from './interfaces'

paypal.configure(configs.configure)

async function pay(data: Array<TransactionInterface>){
    return new Promise((resolve, reject) => {

        const payReq = {
            intent:'sale',
            payer:{
              payment_method:'paypal'
            },
            redirect_urls: configs.redirect_urls,
            transactions: data
        }

        paypal.payment.create(payReq, function(error, payment){
            let links = {};
            if(error){
                reject(error)
            }else{
                payment.links.forEach(function(linkObj){
                    links[linkObj.rel] = {
                      href: linkObj.href,
                      method: linkObj.method
                    };
                })
            
                if (links.hasOwnProperty('approval_url')){
                    resolve(links['approval_url'].href)
                } else {
                    reject('no redirect URI present')
                }
            }



        })

    })
}

async function execute(data: ExecuteInterface){
    
    return new Promise((resolve, reject) => {
        paypal.payment.execute(data.paymentId, {
            payer_id: data.payerId
        }, function(error, payment){
            if(error){
                reject(error)
            } else{
                if(payment.state == 'approved'){
                    resolve('payment completed successfully')
                } else {
                    reject('payment not successful')
                }
            }



        })
    })

}