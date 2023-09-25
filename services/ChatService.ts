import $api from "@/http/index";

export default class ChatService {
    static async getDialogs() {
        const res = await $api.get('chat/get/dialogs')
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        })
        return res;
    }
    static async getMessages(dialogID: number | null) {
        const res = await $api.get(`chat/get/dialog/${dialogID}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        })
        console.log('res (ChatService - getMessages): ', res);
        return res;
    }
}