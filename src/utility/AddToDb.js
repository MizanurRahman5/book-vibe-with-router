

const getStoreReadList = () =>{
    const storeListStr = localStorage.getItem('read-list')
    if(storeListStr){
        const storeList = JSON.parse(storeListStr)
        return storeList;
    }else{
        return [];
    }

}
const addStoreReadList = (id) =>{
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        console.log(id , 'all ready exist')
    }else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
    }
}

export {addStoreReadList}