//管理歌曲模块
(function($,root) {
    function audioManager() {
        this.audio = new Audio();
        this.status = "pause";
    }
    audioManager.prototype = {
        play : function() {
            this.audio.play();
            this.status = "play";
        },
        pause : function() {
            this.audio.pause();
            this.status = "pause";
        },
        setAudioSource : function(src) {
            this.audio.src = src;
            this.audio.load();
        },
        jumptoPlay : function(duration) {
            this.audio.curDuration = duration;
            this.play();
        }
    }
        //切换歌曲的音频路径

    root.audioManager = audioManager;
}(window.Zepto,window.player||(window.player = {})))