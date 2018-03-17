<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import musicList from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  export default {
  	data(){
  		return {
  			songs:[]
      }
    },
    components:{
      musicList
    },
    created(){
      this.initDetail()
    },
    computed: {
    	title(){
    		return this.singer.name
      },
      bgImage(){
    		return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    methods: {
      initDetail(){
      	if(!this.singer.id){
      		this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
        	if(res.code === ERR_OK){
        		this.songs = this.normalizeSongs(res.data.list)
          }
        })
      },
      normalizeSongs(list){
      	let ret = []
        list.forEach((item) => {
      		let {musicData} = item
          if(musicData.songid && musicData.albummid){
      			ret.push(createSong(musicData))
          }
        })
        return ret
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer-detail
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 100
    background: #fff
    &.slide-enter-active, &.slide-leave-active
      transition: all .4s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
</style>
