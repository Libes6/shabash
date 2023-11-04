import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {rootActions} from "@/store/root-actions";


export const useActions=()=>{
    const dispath= useDispatch()
    return useMemo(()=>bindActionCreators(rootActions,dispath),[dispath])
}