// クライアントクラス
class Client {
    // コンストラクタ
    constructor(id, socket) {
        this.id = id;
        this.socket = socket;
    }

    // メッセージ送信
    sendMessage(message) {
        this.socket.send(message);
    }
}

module.exports = Client;
