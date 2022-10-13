import React from "react";
import  "../AddArticle/styles.css";

import TopNav from "../../../../components/user/topNav";
import SideNav from "../../../../components/user/sideNav";
import ArticleAdd from "../../../../components/article/addArticle";

const AddArticle = ()=>{

    return(
        <div>
        <TopNav/>
        <div className="layout">
        <SideNav/>
        <ArticleAdd/>
        </div>
        </div>
    )
}

export default AddArticle;