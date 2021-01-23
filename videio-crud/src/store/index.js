import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        currentVideo: {},
        videos: [],
        error: false,
    },
    mutations: {
        SET_ERROR(state, flag) {
            state.error = flag;
        },
        SET_VIDEOS(state, videos) {
            state.videos = videos
        },
        SET_VIDEO(state, video) {
            state.currentVideo = video
        }
    },
    actions: {
        async getVideos({ commit }) {
            try {
                const videos = await api().get('videos')
                commit('SET_VIDEOS', videos)
                commit('SET_ERROR', false)
            } catch (e) {
                commit('SET_ERROR', true)
            }
        },

        async deleteVideo({ commit }, id) {
            try {
                await api().deleteEnd({
                    id,
                });
                alert('Se eliminó correctamente el video');
                commit('SET_ERROR', false)
            } catch (e) {
                commit('SET_ERROR', true)
            }
        },

        async getVideo({ commit }, id) {
            try {
                const video = await api().get(`videos/${id}`)
                console.log('user', video)
                commit('SET_VIDEO', video)
                commit('SET_ERROR', false)
            } catch (e) {
                commit('SET_ERROR', true)
            }
        },

        async updateVideo({ commit }, { body, id }) {
            try {
                await api().put({
                    url: 'videos',
                    body,
                    id
                })
                commit('SET_ERROR', false)
            } catch (e) {
                commit('SET_ERROR', true)
            }
        }

    },
    getters: {
        getVideoId: (state) => (id) => {
            return state.videos.filter((video) => video.id == id)
        }
    },
    modules: {}
})