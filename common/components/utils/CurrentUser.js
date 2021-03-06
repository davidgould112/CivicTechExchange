// @flow

class CurrentUser {

  static userID(): ?string {
    const {userID} = window.DLAB_GLOBAL_CONTEXT;
    return userID || null;
  }

  static isLoggedIn(): bool {
    return Boolean(this.userID());
  }

  static firstName(): string {
    return window.DLAB_GLOBAL_CONTEXT.firstName;
  }

  static lastName(): string {
    return window.DLAB_GLOBAL_CONTEXT.lastName;
  }
}

export default CurrentUser;
