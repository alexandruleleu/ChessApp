const containerDirective = (accountService,$rootScope,localStorageService) => {
    return {
        templateUrl: 'components/container/container.html',
        restrict: 'E',
        link: (scope) => {
            scope.target={
                user_id:'',
                money:0
            }

        	// Changes the view betweeen panels
            scope.changeSubView = (view) => {
                scope.contCtrl.subViewValue = view;
            }

            // Changes the view betweeen panels
        	scope.changeView = (view) => {
        		scope.contCtrl.viewValue = view;
        	}

            scope.updateMoney=()=>{
                    scope.target.user_id=$rootScope.account._id;
                    accountService.updateMoney(scope.target).then((rsp)=>{
                    $rootScope.account.money=rsp.data.money;
                    localStorageService.set('account',$rootScope.account);

                })
            }
        }
    };
};

containerDirective.$inject = ['accountService','$rootScope','localStorageService'];

angular.module('berger').directive('containerDirective', containerDirective);

