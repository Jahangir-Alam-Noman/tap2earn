import * as Types from "../types/Types";


export const getAskQuesData = () => (dispatch) => {
    const responseData = {
        isLoading: false,
        status: true,
        data: [
            {
                title: "What do you need to get started?",
                
                description: "First of all, you need to register on our website. To do this, you must fill in the required fields in the registration form, as well as familiarize yourself with the site rules and confirm your consent.(If you agree with the rules of the site, you automatically agree to receive our newsletter and receive promotional materials. Also, you can always cancel or unsubscribe in the letter itself.)After confirming the mail, you will have access to your personal account in which it is easy to track the entire dynamics of investments, your referral program and the overall balance."
            },
            {
                title: "How to pay for the investment package?",
                
                description: "At the moment, we use the Binance wallet to pay for and withdraw funds from investment packages.Use a P2P transaction to convert BDT to USDT and send it to our Binance wallet."
            },
            {
                title: "Is there a limit to the maximum and the minimum investment package?",
                description: "The cheapest investment package is 4000Tk for a 35-day duration. The most expensive investment package is 30000TK for a 95-day validity period. Attention! There is no limit to the number of packages that you can purchase."
            },
            {
                title: "How to withdraw profit?",
                description: "All withdrawal functionality for investment charges is accessed through your personal account in the 'Withdraw' section. You must specify the wallet address and desired amount. This application will be marked as pending before being automatically processed. If the application's status is changed to 'Canceled,' all funds will be returned to the account balance. Rerun the application to ensure that all data entered is correct."
            },
            {
                title: "After payment, the investment package did not appear in the personal account",
                description: "Please keep in mind that activating the investment package may take up to six to twelve hours. If the package is not activated after confirmation, please verify that the amount sent is correct. You can also contact our support specialists to clarify any information on your account."
            },

        ]
    }
    dispatch({ type: Types.GET_ASK_QUES_DATA, payload: responseData });
}