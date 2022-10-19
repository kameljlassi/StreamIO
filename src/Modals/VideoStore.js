import { writable } from 'svelte/store';
       
    function filter (query) {
        items.update(item => {
            item = item.map(i => {
                let active = i.id.toLowerCase().includes(query.toLowerCase())
                    if (active != i.active) {
                        return { ...i, active }
                    }
                    return i;
                });
                return item;
            })
            }

        export const items = writable( [
            {
                id : "A",
                source : '../images/video/final.mp4',
                description : "this is description1",
                poster : '../images/snavigation/layerw.png'
                
            },
            {
                id : "BEBC",
                source : '../images/video/final.mp4',
                description : "this is description2",
                poster : '../images/snavigation/layerw.png'
                
            },
            {
                id : "ZGO",
                source : '../images/video/final.mp4',
                description : "this is description",
                poster : '../images/snavigation/layerw.png'
                
            },
            {
                id : "1",
                source : '../images/video/final.mp4',
                description : "this is description",
                poster : '../images/snavigation/layerw.png'
                
            },
            {
                id : "1",
                source : '../images/video/final.mp4',
                description : "this is description",
                poster : '../images/snavigation/layerw.png'
                
            },
            {
                id : "1",
                source : '../images/video/final.mp4',
                description : "this is description",
                poster : '../images/snavigation/layerw.png'
                
            },
            {
                id : "1",
                source : '../images/video/final.mp4',
                description : "this is description",
                poster : '../images/snavigation/layerw.png'
                
            },
            {
                id : "1",
                source : '../images/video/final.mp4',
                description : "this is description",
                poster : '../images/snavigation/layerw.png'
                
            },
            {
                id : "1",
                source : '../images/video/final.mp4',
                description : "this is description",
                poster : '../images/snavigation/layerw.png'
                
            },
            {
                id : "1",
                source : '../images/video/final.mp4',
                description : "this is description",
                poster : '../images/snavigation/layerw.png'
                
            },

        ])

        

        export const dispatcher = {filter}
        