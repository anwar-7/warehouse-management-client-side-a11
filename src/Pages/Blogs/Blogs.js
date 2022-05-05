import React, { useState } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blogs = () => {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <div className="blogs-container container w-50 mx-auto my-5">
      <PageTitle title={'Blogs'}></PageTitle>
      <h3>This is a Blogs Section</h3>
      <div>
        {/* <div className="col-xl-1">
          <div class="input-group">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-primary"
                type="button"
                onClick={decNum}
              >
                -
              </button>
            </div>
            <input
              type="text"
              class="form-control"
              value={num}
              onChange={handleChange}
            />
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-primary"
                type="button"
                onClick={incNum}
              >
                +
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Blogs;
