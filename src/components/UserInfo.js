export default class UserInfo {
    constructor({name, job}) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
        this._inputList = document.querySelector('.popup_profile').querySelectorAll('.popup__field');
    }

    getUserInfo() {
      this._dataUser = {};
      this._dataUser.userName = this._name.textContent;
      this._dataUser.userJob = this._job.textContent;
      this._inputList.forEach((input) => {
        input.value = this._dataUser.userName
        if(input.name === 'userJob') {
          input.value = this._dataUser.userJob
        }
      });
      return this._dataUser;
    }

    setUserInfo(name, job) {
        this._name.textContent = name.value;
        this._job.textContent = job.value;
    }
}
