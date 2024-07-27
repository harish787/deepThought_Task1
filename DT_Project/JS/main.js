const data = [
    {task_title0: "Explore the world of management"},
    { asset_title1: "Technical Project Management" },
    { asset_title2: "Threadbuild" },
    { asset_title3: "Structure Your Pointer" },
    { asset_title4: "4SA Method" }
];


let putData = document.querySelector('.list-data');

data.forEach((item, index) => {
    let key = Object.keys(item)[0]; 
    let value = item[key]; 
    
    let li = document.createElement('li');
    if(key=='task_title0'){
        li.setAttribute('class','bold');
    }
    li.setAttribute('key', index);
    li.textContent = value;

    putData.appendChild(li);
});
let expanded = false;
function handleNotice(){
    const move = document.querySelector('.journey-board');
    const rotate_arrow = document.querySelector('.arrow-image');
    if(expanded == true){
        
    move.style.transition = 'transform 1s ease';
    if(window.innerWidth>450){
    move.style.transform = 'translateX(-335px)';
    }
    else{
        move.style.transform = 'translateX(-300px)';
    } 
    rotate_arrow.style.transition = 'transform 1s ease';
    rotate_arrow.style.transform = 'rotateX(180deg)';
    expanded = false;
    }
    else{
        move.style.transition = 'transform 1s ease';
    move.style.transform = 'translateX(0px)';
    rotate_arrow.style.transition = 'transform 1s ease';
    rotate_arrow.style.transform = 'rotateY(180deg)';
    expanded = true;
    }
}


let heading = document.querySelector('.tpm .main-heading h2');
heading.innerHTML = data[1].asset_title1;

let tasks =  [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            "status": "notworkyet",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                    "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure you pointers ",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                }
            ]
        }
    ]

let desc = document.querySelector('.ewm-desc h3');
desc.innerHTML = tasks[0]["task_title"];

let descP = document.querySelector('.ewm-desc p');
descP.innerHTML = tasks[0]["task_description"];

const assetsArray = document.querySelectorAll('.assets div .heading');

for (let i = 0; i < assetsArray.length; i++) {
    let currentHeading = assetsArray[i].querySelector('h3');
    let heading = Object.values(data[i+1])[0];
    console.log(heading)
    currentHeading.innerHTML = heading;
}

let asset_desc = document.querySelectorAll('.assets div .description');

let assetDescriptions = [];

tasks[0].assets.forEach(asset => {
    assetDescriptions.push(asset.asset_description);
});

for (let i = 0; i < asset_desc.length; i++) {
    let currentDesc = asset_desc[i].querySelector('p');
    
    currentDesc.innerHTML = assetDescriptions[i];
}

let threadExpand = false;
function handleThreadExpand(){
    console.log('clicked')
    let btn = document.querySelector('.threadbuild .threadA button');
    let subThreads = document.querySelector('.threadbuild .subThreads')
    btn.style.transition = 'transform 1s ease';
    if(threadExpand==true){
        btn.style.transform = 'rotate(180deg)';
        subThreads.style.visibility = 'hidden';
        threadExpand = false;
    }
    else{
        subThreads.style.visibility = 'visible';
        
        btn.style.transform = 'rotate(0deg)';
       
        threadExpand = true;
    }
    
}
let threadExpand2 = false;
function handleIntroExpand(){
    let btn = document.querySelector('.sam .intro button');
    let subThreads = document.querySelector('.sam .methods #introduction')
    btn.style.transition = 'transform 1s ease';
    if(threadExpand2==true){
        btn.style.transform = 'rotate(180deg)';
        subThreads.style.display = 'none';
        threadExpand2 = false;
    }
    else{
        subThreads.style.display = 'block';
        
        btn.style.transform = 'rotate(0deg)';
       
        threadExpand2 = true;
    }
    
}
let threadExpand3 = false;
function handleThreadA(){
    let btn = document.querySelector('.sam .threadA button');
    let subThreads = document.querySelector('.sam .threadA .subThreadA')
    btn.style.transition = 'transform 1s ease';
    if(threadExpand3==true){
        btn.style.transform = 'rotate(180deg)';
        subThreads.style.display = 'none';
        threadExpand3 = false;
    }
    else{
        subThreads.style.display = 'block';
        
        btn.style.transform = 'rotate(0deg)';
       
        threadExpand3 = true;
    }

}