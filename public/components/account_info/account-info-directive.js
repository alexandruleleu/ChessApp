const accountInfo = ($rootScope,accService,localStorageService,$location) => {
    return {
        templateUrl: 'components/account_info/account-info.html',
        restrict: 'E',
        link: (scope) => {
            
            scope.account=$rootScope.account;
            console.log(scope.account);
            scope.logout=()=>{
                $rootScope.account=null;
                localStorageService.clearAll();
                $location.path('/login');
                
            }


            
        }
}
};

accountInfo.$inject = ['$rootScope','accountService','localStorageService','$location'];

angular.module('berger').directive('accountInfo', accountInfo);

