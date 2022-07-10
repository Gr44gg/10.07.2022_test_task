import { defineStore } from 'pinia'
import _ from 'lodash'

export const useStore = defineStore('store', {
    state: () => {
        return {
           authToken: localStorage.getItem('token') ? localStorage.getItem('token') :  null,
           loading: false,
           data: [],
        }
    },
    getters: {
        orderedLists: (state) => {
                const sorted = {}
                state.data.forEach((el) => {
                  if (!sorted[el.userId]) {
                      sorted[el.userId] = {
                        id: el.userId,
                        true: 0,
                        false: 0,
                        titles : [],
                      }
                  }    
                  if (el.completed == true) {
                    sorted[el.userId].true++
                  } else { 
                    sorted[el.userId].false++ 
                  }
                  sorted[el.userId].titles.push(el.title)
                })
                
                const completed = []
                Object.entries(sorted).forEach((list) => {
                    completed.push(list.true)
                })
                state.loading = false
                if (new Set(completed).size !== completed.length) {
                    return _.orderBy(sorted, 'id')                    
                } else { return _.orderBy(sorted, 'true').reverse() }
                        
        }
    },
    actions: {
        async getList(api) {
            fetch(api).then(response => {
                if (!response.ok) {
                  throw Error(response.statusText)
                }
                return response.json()
              })
              .then(response => {
                this.data = response
              })
              .catch(error => {
                alert(error)
              })            
        }
    }
})