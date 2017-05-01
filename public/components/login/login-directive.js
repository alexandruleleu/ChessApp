const loginDirective = (accountService, $rootScope, $location, localStorageService,$uibModal) => {
    return {
        templateUrl: 'components/login/login.html',
        restrict: 'E',
        link: (scope) => {
            scope.loginData = {
                email: null,
                password: null
            }
            scope.newAcc = {
                email: null,
                password: null,
                type: 0
            }
            scope.login = () => {
                accountService.login(scope.loginData).then((rsp) => {

                    if (rsp.data) {
                        $rootScope.account = rsp.data;
                        scope.error = false;
                        localStorageService.set('account', $rootScope.account);
                        localStorageService.set('loggedIn', true);
                        $location.path('/manager');

                    } else {
                        scope.error = true;

                    }
                });
            }

            scope.signup = () => {

                accountService.createAcc(scope.newAcc).then((rsp) => {
                    if(rsp.data){
                        scope.success=true;
                    }else{
                        scope.signErr=true;
                    }
                    
                });

            }

             // Open the modal that contains the stading table here
            scope.changePsw =  () => {
                const modalInstance = $uibModal.open({
                    templateUrl: 'changePassword.html',
                    controller: ($scope, $uibModalInstance,accountService) => {
                        $scope.changeData={
                            email:null,
                            oldPassword:null,
                            newPassword:null
                        }
                        
                        
                       

                        // When we hit the ok button
                        $scope.change = () => {
                            accountService.updatePassword($scope.changeData).then((rsp)=>{
                                if(rsp.data){
                                    $uibModalInstance.close();
                                }else{
                                    $scope.error=true;
                                }
                            });
                            
                        };

                        // When we hit the cancel button
                        $scope.cancel = () => {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }
                });

                modalInstance.result.then(() => {
 
                }, () => {
                    
                });
            };








        }
    };
};

loginDirective.$inject = ['accountService', '$rootScope', '$location', 'localStorageService','$uibModal'];

angular.module('berger').directive('loginDirective', loginDirective);
