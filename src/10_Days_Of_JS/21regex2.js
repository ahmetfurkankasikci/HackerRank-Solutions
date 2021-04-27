function regexVar() {
    
    let re=new RegExp(/^(mr[.]|ms[.]|mrs[.]|dr[.]|er[.])(.*)([a-z])$/i)
    
    return re;
}