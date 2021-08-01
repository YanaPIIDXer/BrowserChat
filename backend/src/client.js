// クライアントクラス
class Client {
    // コンストラクタ
    constructor(id, socket) {
        this._id = id;
        this._socket = socket;
    }

    // メッセージ送信
    sendMessage(message) {
        this._socket.send(JSON.stringify({ "message": message }));
    }

    // IDのゲッター
    get id() {
        return this._id;
    }
}

module.exports = Client;
