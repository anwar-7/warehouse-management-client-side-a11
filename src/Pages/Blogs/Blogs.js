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
    <div className="blogs-container container w-75 mx-auto my-5">
      <PageTitle title={'Blogs'}></PageTitle>
      <div className="questionAndAnswer">
        <h3>1. Difference between `javascript` and `nodejs</h3>
        <p>
          <br />
          Node.js is a cross-platform, open-source JavaScript runtime
          environment that enables JavaScript to be run on the server.
        </p>
        <p>
          JavaScript is an object-oriented scripting language that is used to
          build dynamic HTML pages with interactive effects on a webpage.
          <br />
          On the other hand, Node.js usually represents a list of objects and
          methods accessible to JavaScript code when run in the V8 engine or via
          the node interpreter.
        </p>
        <p>
          JavaScript can only run in the browser
          <br />
          On the other hand, NodeJs helps JavaScript to run outside the browser.
        </p>
        <p>
          JavaScript has the capacity to add HTML tags but NodeJs doesn't have.
        </p>
        <p>
          JavaScript basically uses client side but NodeJs mosty uses for server
          side.
        </p>
      </div>

      {/* <div className="questionAndAnswer">
        <h3>When should you use `nodejs` and when should you use `mongodb`</h3>
      </div> */}

      <div className="questionAndAnswer">
        <h3>2. Differences between `sql` and `nosql` databases.</h3>
        <p>
          Structured query language is called SQL, on the other hand, non
          Structured query language is called noSQL.
        </p>
        <p>SQL is a relational database, noSQL is a non relational database.</p>
        <p>
          SQL is an organized database system but noSQL is not so organized
          database system.
        </p>
        <p>
          SQL Databases are best for inserting multi-row data, noSQL is best for
          inserting document or json data.
        </p>
        <p>
          SQL databases are table based. On the other hand, noSql databases are
          document base
        </p>
      </div>

      <div className="questionAndAnswer">
        <h3>3. What is the purpose of `jwt` and how does it work</h3>
        <h6>Purposes:</h6>
        <p>The main purposes of JWT is using stateless authentication</p>
        <p>Another is to get rid of stateful authentication</p>
        <h6>How does JWT works:</h6>
        <p>Json Web Tokens(JWT) contain a set of claims.</p>
        <p>Claims are used to transmit information between two parties.</p>
        <p>
          Claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted.
        </p>
        <p>
          A JWT is a Base64Url -encoded text format that consists of three parts
        </p>
        <p>These are: Header, Payload, Signature</p>
      </div>
    </div>
  );
};

export default Blogs;
