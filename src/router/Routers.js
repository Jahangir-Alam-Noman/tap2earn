import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import FullPageSpinner from '../components/full-page-spinner';
import InvestmentPlans from '../components/investmentPlans/InvestmentPlans';
import BuyingPackage from '../components/ourPlans/BuyingPackage';
import Index from '../components/user profile/Index';
import { useAuth } from '../context/auth';
import AboutPage from '../modules/frontend/pages/AboutPage';
import FaqPage from '../modules/frontend/pages/FaqPage';
import ForgetPasswordPage from '../modules/frontend/pages/ForgetPasswordPage';
import HomePage from '../modules/frontend/pages/HomePage';
import LoginPage from '../modules/frontend/pages/LoginPage';
import Packages from '../modules/frontend/pages/Packages';
import ReferralProgramPage from '../modules/frontend/pages/ReferralProgramPage';
import RegistrationPage from '../modules/frontend/pages/RegistrationPage';
import TeamPage from '../modules/frontend/pages/TeamPage';
import CreateInvest from '../modules/userDashboard/components/myInvestment/CreateInvest';
import Batch from '../modules/userDashboard/components/myTask/banner/Batch';
import BannerShow from '../modules/userDashboard/components/myTask/BannerShow';
import VideoShow from '../modules/userDashboard/components/myTask/VideoShow';
import WatchBannerList from '../modules/userDashboard/components/myTask/WatchBannerList';
import WatchVideoList from '../modules/userDashboard/components/myTask/WatchVideoList';
import WithoutLoginBanner from '../modules/userDashboard/components/myTask/withoutLoginModule/WithoutLoginBanner';
import WithoutLoginVideo from '../modules/userDashboard/components/myTask/withoutLoginModule/WithoutLoginVideo';
import InvestWithdraw from '../modules/userDashboard/components/payout/InvestWithdraw';
import SubscriptionWithdraw from '../modules/userDashboard/components/payout/SubscriptionWithdraw';
import BuyPackage from '../modules/userDashboard/pages/BuyPackage';
import DashboardHome from '../modules/userDashboard/pages/DashboardHome';
import DashInvestmentPage from '../modules/userDashboard/pages/DashInvestmentPage';
import DashRefferalPage from '../modules/userDashboard/pages/DashRefferalPage';
import MyEarnPage from '../modules/userDashboard/pages/MyEarnPage';
import MyTaskPage from '../modules/userDashboard/pages/MyTaskPage';
import OrderHistoryPage from '../modules/userDashboard/pages/OrderHistoryPage';
import PayoutPage from '../modules/userDashboard/pages/PayoutPage';
import ScrollToTop from '../utils/ScrollToTop ';
import AuthRouteLong from './auth-route-long';
import GuestRoute from './guest-route';



const queryClient = new QueryClient();

function App () {
  let { initializing } = useAuth();
  return (
    initializing
      ? <FullPageSpinner />
      :
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop>
              <Switch>
                <GuestRoute exact path="/" component={HomePage}  name = "Home Page"/>
                <GuestRoute exact path="/about" component={AboutPage} name="About Page" />
                <GuestRoute exact path="/packages" component={Packages} name="Packages Page" />
                <GuestRoute exact path="/investments" component={InvestmentPlans} name="Packages Page" />

                <GuestRoute path="/faq" component={FaqPage} name="FAQ Page"/>
                <GuestRoute path="/login" component={LoginPage} name="Login Page"/>
                <GuestRoute path="/register" component={RegistrationPage} name="Registration Page" />
                <GuestRoute exact path="/team" component={TeamPage} name="Team Page" />
                <GuestRoute exact path="/referral-program" component={ReferralProgramPage} name="Referral Program Page" />
            
                <AuthRouteLong exact path="/user-dashboard/index" component={DashboardHome} name="User Dashboard Index Page" />
                <AuthRouteLong exact path="/user-dashboard/profile" component={Index} name="User Dashboard Index Page" />

            
                <AuthRouteLong exact path="/user-dashboard/buy-package" component={BuyPackage} name="Buy a package Page" />
                <AuthRouteLong exact path="/user-dashboard/buy-package/:id" component={BuyingPackage} name="Buy a package Page" />
                <AuthRouteLong exact path="/user-dashboard/investment/:id" component={CreateInvest} name="Buy a package Page" />


                <AuthRouteLong exact path="/user-dashboard/payouts" component={PayoutPage} name="Payout Page" />
                <AuthRouteLong exact path="/user-dashboard/subscription/withdraw" component={SubscriptionWithdraw} name="Payout Page" />
                <AuthRouteLong exact path="/user-dashboard/invest/withdraw" component={InvestWithdraw} name="Payout Page" />


                <AuthRouteLong exact path="/user-dashboard/refferals" component={DashRefferalPage} name="Dashboard Refferal Page" />
                <AuthRouteLong exact path="/user-dashboard/orders" component={OrderHistoryPage} name="Dashboard Orders Page" />
                <AuthRouteLong path="/user-dashboard/my-task" component={MyTaskPage} exact name="Dashboard Orders Page" />
                <AuthRouteLong path="/user-dashboard/my-task/watch_video/:name" component={WatchVideoList} exact name="Dashboard Orders Page"/>

                <AuthRouteLong path="/user-dashboard/my-task/watch_video/no_package/video" component={WithoutLoginVideo} exact name="Dashboard Orders Page"/>
                <AuthRouteLong path="/user-dashboard/my-task/banner/no_package/click" component={WithoutLoginBanner} exact name="Dashboard Orders Page"/>


                <AuthRouteLong path="/user-dashboard/my-task/watch_video/:name/video/:task" component={VideoShow} exact name="Dashboard Orders Page"/>
                <AuthRouteLong path="/user-dashboard/my-task/banner/:name/" component={WatchBannerList} exact name="Dashboard Orders Page"/>
                <AuthRouteLong path="/user-dashboard/my-task/banner/:name/batches/:task_id" component={Batch} exact name="Dashboard Orders Page"/>

                <AuthRouteLong path="/user-dashboard/my-task/banner/:name/:task/:batch" component={BannerShow} exact name="Dashboard Orders Page"/>


                <AuthRouteLong path="/user-dashboard/investment" component={DashInvestmentPage} exact name="Dashboard Orders Page"/>           
                <AuthRouteLong path="/user-dashboard/my-earn" component={MyEarnPage} exact name="Dashboard Orders Page"/>
                <AuthRouteLong path="/password-reset" component={ForgetPasswordPage} exact name="Dashboard Orders Page"/>
                {/* <Route component={NotFound}/> */}
              </Switch>
                            
          </ScrollToTop>
        </Router>
        <ReactQueryDevtools initialIsOpem={false} position='bottom-right'/>
      </QueryClientProvider>
  );
};

export default App;