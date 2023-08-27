
//@ts-check

  /**
   * post request
   * @param {string} url {https or http}://{domain or ip:port}/{~}
   * @param {object} header header data
   * @param {object} body body data
   * @returns {Promise<Response>} 
   */
  exports.post=(url,header={},body={})=>{
    return  fetch(url,{
        method:'POST',
        headers:header,
        body:JSON.stringify(body)
    })
  }
  /**
   * get request
   * @param {string} url {https or http}://{domain or ip:port}/{~}
   * @param {object} header header data
   * @param {object} parameter parameter data
   * @returns {Promise<Response>} 
   */
  exports.get=(url,header={},parameter={})=>{
    const a =Object.keys(parameter);
    if(a.length>0){
      for(var i =0;i<a.length;i++){
        if(i==0){
          url+='?'+a[i]+"="+encodeURIComponent(parameter[a[i]]);
        }else{
          url+='&'+a[i]+"="+encodeURIComponent(parameter[a[i]]);
        }
      }
    }
    return  fetch(url,{
          method:'GET',
          headers:header
      })
  }
  /**
   * post request when content-type to x-www-form-urlencoded 
   * @param {string} url {https or http}://{domain or ip:port}/{~}
   * @param {object} header header data
   * @param {object} parameter parameter data
   * @returns {Promise<Response>} 
   */
  exports.post_urlencoded=(url,header={},parameter={})=>{
    var translate_body="";
   const keys= Object.keys(parameter);
   for(var key of keys){
    if(translate_body.length==0){
        translate_body+="?";
    }else{
        translate_body+="&";
    }
    translate_body+=key.replace(/ /g,'+');
    translate_body+="=";
    translate_body+=parameter[key].replace(/ /g,'+');
   }
    return  fetch(url+translate_body,{
          method:'POST',
          headers:header
      })
  }