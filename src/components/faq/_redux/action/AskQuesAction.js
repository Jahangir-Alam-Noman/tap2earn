import Axios from 'axios';

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
                description: "At the moment, we use bitcoin to pay and withdraw funds for investment packages. In the future, the number of payment systems will be increased."
            },
            {
                title: "Is there a limit to the maximum and the minimum investment package?",
                description: "The minimum investment package costs - $ 10 and is valid for 30 days. The maximum investment package costs - $ 50,000 and is valid for 90 days. Attention! The number of packages is unlimited."
            },
            {
                title: "How to withdraw profit?",
                description: "All functionality for the withdrawal of investment charges occurs through your personal account in the 'Order Payment' section. You must specify the wallet to which the profit should be received and the desired amount. This application will enter a pending status and then will be processed automatically. If the status of the application has changed to 'Canceled' all funds will be returned to the balance. Repeat the application and check the correctness of all data entered."
            },
            {
                title: "After payment, the investment package did not appear in the personal account",
                description: "Please note that the activation of the investment package occurs after the 4th confirmation of the Blockchain system.If, after confirmation, the package is not activated, in this case, please, check that the amount sent is correct, taking into account the commission. You can also clarify all the information on your account with our support specialists at [email protected]"
            },

        ]
    }
    dispatch({ type: Types.GET_ASK_QUES_DATA, payload: responseData });
}