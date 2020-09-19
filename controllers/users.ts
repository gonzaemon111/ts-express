import express from "express";

class usersController {
  req: express.Request;
  constructor(req: express.Request) {
    this.req = req
  }

  // TS は 関数の前にfunctionをつけない。
  index(): object {
    return { hoge: 'hoge' }
  };
};

export default usersController;