function GroupBy(key,data){
    const newData={};
    data.tickets.forEach(ele => {
        if(!newData[ele[key]]) newData[ele[key]]=[];
        newData[ele[key]].push(ele.id);
    });
    return newData;
}
function FillUsers(data){
    const user={}
    data.users.forEach(ele => {
      user[ele.id]=ele.name;
    });
    return user
}
function FillStatus(data){
    const status={};
    data.tickets.forEach(ele => {
        status[ele.status]=ele.status;
    });
    return status;
}
function SortBy(by,data,state){
    const display={};
    for(const key in state) display[key]=state[key];
    for(const key in display){
        const arr=data.tickets.filter(card=>display[key].indexOf(card.id)!==-1);
        if(by==="title"){
            const sortedArray = arr.sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1; 
                return 0;
            });
            display[key]=sortedArray.map(card=>card.id);
        }
        else{
            const sortedArray = arr.sort((a, b) => b[by]-a[by]);
            display[key]=sortedArray.map(card=>card.id);
        }
    }
    return display;
    // console.log(state)
    // return state;
}
function Capital(name){
    let string=name;
    return string[0].toUpperCase()+string.slice(1);
}
export {GroupBy, FillUsers, FillStatus, SortBy, Capital};