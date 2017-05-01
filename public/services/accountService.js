let _$http;


class accountService {
    constructor($http) {
        _$http = $http;
        
    }

    createAcc(accData) {
        const configObject = {
            method: 'POST',
            url: '/account',
            data: JSON.stringify(accData)
        };
        return _$http(configObject);
    }

//I really want to do that :))
    updateMoney(data){
        const configObject = {
            method: 'PUT',
            url: '/money',
            data: JSON.stringify(data)
        };
        return _$http(configObject);
    }

    updatePassword(data){
        const configObject = {
            method: 'PUT',
            url: '/account',
            data: JSON.stringify(data)
        };
        return _$http(configObject);
    }

    login(data) {
        console.log(data);
        const configObject = {
            method: 'GET',
            url: '/account/'+data.email+'/'+data.password
        };
        return _$http(configObject);
    }

    deleteAcc(id) {
        const promise = _$http({
                method: 'DELETE',
                url: '/account',
                data: { _id: id },
                headers: { 'Content-Type': 'application/json;charset=utf-8' }
            });
        // Return the promise to the controller
        return promise;
    }
}

accountService.$inject = ['$http'];

angular.module('berger').service('accountService', accountService);
