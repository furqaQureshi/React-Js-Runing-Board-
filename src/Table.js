import React from "react";

function Table(props) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Participant Name</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Unit</th>
            <th scope="col">Status</th>
            <th scope="col">Points</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.unit}</td>
                <td>{item.number}</td>
                <td>
                  <div className="row">
                    <button onClick={() => add(props.count)}>+</button>
                    <input type="number" value={props.count} />
                    <button onClick={() => remove(props.count)}>-</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
// import React from "react";

// function Table() {
//   return (
//     <div>
//       <div className="col-md-10 mx-auto my-4">
//         <table className="table table-hover">
//           <thead className="table-header bg-dark text-white border-th">
//             <tr>
//               <th scope="col">Rank</th>
//               <th scope="col">Participant Name</th>
//               <th scope="col">Location</th>
//               <th scope="col">Date</th>
//               <th scope="col">Unit</th>
//               <th scope="col">Status</th>
//               <th scope="col">Points</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* {contacts.length > 0 ? ( */}
//               contacts.map((contact, id) => {
//                 return (
//                   <tr key={id} className="css-1an0fx2">
//                     <td>
//                       <span>{id + 1}</span>
//                     </td>
//                     <td>{contact.name}</td>
//                     <td>{contact.location}</td>
//                     <td>{contact.date}</td>
//                     <td>{contact.unit}</td>
//                     <div className="increment">
//                       <button className="form-btn" onClick={decNum}>
//                         -
//                       </button>
//                       <span>
//                         <span onChange={handleChange}>{num}</span>
//                       </span>
//                       <button class="form-btn" onClick={incNum}>
//                         +
//                       </button>
//                     </div>
//                     <td>
//                       <span
//                         className={
//                           contact.types == "Runing" ? "running" : "stopped"
//                         }
//                       >
//                         {contact.types}
//                       </span>
//                     </td>
//                     <td>
//                       <button
//                         onClick={() => deleteContact(contact.id)}
//                         className="btn btn-sm btn-danger"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })

//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Table;
