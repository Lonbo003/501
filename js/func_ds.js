self.onmessage = function (e) {//e.data
  //e.data參數
  let idx = e.data.idx;
  let limit = e.data.limit;
  let rule = e.data.rule;
  let arr0 = e.data.arr0;
  let arrR = new Set();
  let arrP = e.data.arrP;
  //迴圈範圍
  let start = idx * limit;
  let end = (idx + 1) * limit > arr0.length ? arr0.length : (idx + 1) * limit;
  if (rule.ws === 1) {
    for (let a = start; a < end; a++) {
      if (arr0[a].length < (rule.len * rule.ws)) continue;
      if (arr0.indexOf(arr0[a]) != a) continue;
      let A0len = Math.ceil(arr0[a].length / rule.len);
      let t_arr0 = [];
      for (let b = 0; b < A0len; b++) {
        t_arr0 = arr0[a].substr(b * rule.len, rule.len).split('');
        if (!rule.rp) t_arr0 = [...new Set(t_arr0)];
        let A0 = t_arr0.join('.');
        if (t_arr0.length === rule.len) arrR.add(A0);
      }
    }
  }
  else if (rule.ws === 2) {
    for (let a = start; a < end; a++) {
      if (arr0[a].length < (rule.len * rule.ws)) continue;
      if (arr0.indexOf(arr0[a]) != a) continue;
      let A0len = Math.ceil(arr0[a].length / (rule.len * rule.ws));
      let t_arr0 = [];
      for (let b = 0; b < A0len; b++) {
        let A0 = arr0[a].substr(b * (rule.len * rule.ws), (rule.len * rule.ws));
        if (!new RegExp(`(0[1-9]|1[0-${arrP[arrP.length - 1].substr(1, 1)}]){${rule.len}}`).test(A0)) continue;
        for (let c = 0; c < rule.len; c++) {
          t_arr0.push(A0.substr(c * rule.ws, rule.ws));
        }
        if (!rule.rp) t_arr0 = [...new Set(t_arr0)];
        let A1 = t_arr0.join('.');
        if (t_arr0.length === rule.len) {
          arrR.add(A1);
          t_arr0.splice(0)
        }
      }
    }
  }
  self.postMessage({ idx, arrR });//輸出
  self.close();//關閉worker
}