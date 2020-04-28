export default{
    name:'chat',
    methods: {
        send_message(){ // message값을 messages에 추가 후 초기화
            this.messages.push(this.message)
            this.message = ""
        }
    },
    data(){
        return{
            channels:["general", "random"],
            message: "",
            messages : [] // 폼에서 입력한 데이터를 배열로 저장
        }
    }
}