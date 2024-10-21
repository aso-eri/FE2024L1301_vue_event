// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count: 0,
            inNumber: 1
        };
    },
    methods: {
        tasu() {
            this.count += this.inNumber;
            this.imageChange();
        },
        hiku() {
            this.count -= this.inNumber;
            this.imageChange();
        },
        kake() {
            this.count *= this.inNumber;
            this.imageChange();
        },
        waru() {
            this.count /= this.inNumber;
            this.imageChange();
        },
        reset() {
            this.count = 0;
            this.inNumber = 1;
        },
        imageChange() {
            let image_area = document.getElementById("image_area");
            if(this.count == 0) {
                image_area.innerHTML = '<img src="./img/hime1.jfif" width="300">';
            }else if(this.count % 3 == 0 && this.count % 5 == 0) {
                image_area.innerHTML = '<img src="./img/hime3.png" width="300">';
            }else if(this.count % 3 == 0 || this.count % 5 == 0) {
                image_area.innerHTML = '<img src="./img/hime2.jfif" width="300">';
            }else{
                image_area.innerHTML = '<img src="./img/hime1.jfif" width="300">';
            }
        }
    }
});
