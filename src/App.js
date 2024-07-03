import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addData, deleteData, update, search, sort } from './actions';

function App() {

  const dispatch = useDispatch();
  const selector = useSelector((selecter) => selecter)
  const [student, setStudent] = useState({ fname: "", lname: "", password: "", email: "" })
  console.log(selector);
  const [isEdit, setIsEdit] = useState(-1)
  const [search1, setSearch1] = useState("")


  const fontSubmit = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const submit = () => {
    if (isEdit === -1) { dispatch(addData(student)) }
    else {
      dispatch(update(student, isEdit))
    }
  }
  // setData([...data, student])
  // localStorage.setItem("u", JSON.stringify([...data, student]))

  const handleEdit = (item, idx) => {
    setStudent(item)
    setIsEdit(idx)
  }

  const hendelsearch = () => {
    dispatch(search(search1));
  }

  const hendelsort = () => {
    dispatch(sort())
  }




  return (
    <div style={{ backgroundImage: "url(https://img.freepik.com/premium-photo/elegant-floral-patterns_905683-32458.jpg?size=626&ext=jpg&ga=GA1.1.1032820823.1690929010&semt=sph) ", backgroundSize: "cover", height: "950px", width: "100%", padding: "30px" }}>
      <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>

        <div >
          <label htmlFor="fname"><b className="text-xl">Fname:-</b></label>
          <input type="text" id="fname" name="fname" value={student.fname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
        </div>

        <div >
          <label htmlFor="lname"><b className="text-xl">Lname:-</b></label>
          <input type="lname" id="lname" name="lname" value={student.lname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
        </div>

        <div>
          <label htmlFor="password"><b className="text-xl">Password:-</b></label>
          <input type="password" id="password" name="password" value={student.password} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
        </div>

        <div>
          <label htmlFor="email"><b className="text-xl ">Email:-</b></label>
          <input type="email" id="email" name="email" value={student.email} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent " />
        </div>
        <div>
          <button onClick={submit}><b>Submit</b></button>
        </div>

        <div className="flex justify-center mt-[4%]">
          <label htmlFor='search' className="text-xl"></label>
          <input type='search' id='search' onChange={(e) => setSearch1(e.target.value)} className="bg-transparent h-8 w-36 rounded-xl  border-blue-500  mr-[50px]  text-[15px]" />
          <button onClick={hendelsearch} >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
              <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
            </svg></button>
        </div>

        <div className="flex justify-center mt-[5%]">

          <button onClick={hendelsort}
            className="bg-amber-600 h-12 w-24 rounded-xl  border-yellow-500  mr-[50px] mt-6" ><b>sort</b></button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "4%" }}>
          <table >
            <thead>
              <th>Fname</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
            </thead>
            <tbody>{
              selector?.formReducer?.map((item, index) => {
                return (
                  <tr>
                    <td>{item?.fname}</td>
                    <td>{item?.lname}</td>
                    <td>{item?.email}</td>
                    <td>{item?.password}</td>
                    <td>
                      <button onClick={() => {
                        dispatch(deleteData(index))
                      }}>Delete</button>
                    </td>
                    <td>
                      <button onClick={() => {
                        handleEdit(item, index)
                      }}>Edit</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
