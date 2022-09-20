import { FaFacebook } from 'react-icons/fa';

export const Login = () => {
      return (
            <div className="w-full h-full flex flex-col lg:flex-row rounded-md">
                  <div className="lg:w-1/2 transition-all duration-300 lg:flex hidden justify-center items-center">
                        <img className="w-full h-full object-cover bg-cover"
                         src="https://images.unsplash.com/photo-1600267185393-e158a98703de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                  </div>
                  <div className="lg:w-1/2 flex-nowrap transition-all duration-300 md:flex flex-col items-center bg-white">
                        <div className="header w-full my-4 py-5">
                              <h1 className="text-3xl text-center text-black uppercase font-bold tracking-widest">SingtoDev</h1>
                        </div>
                        <div className="body w-full px-10">
                              <div class="rowGroup px-3 my-3">
                                    <label for="email">Email</label>
                                    <input name="email" className="my-3 border-slate-200 w-full h-10 px-3 ring-1 rounded-md placeholder-slate-400  focus:outline-none focus:ring focus:ring-blue-600/70 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
                              </div>
                              <div class="rowGroup px-3 my-3">
                                    <label for="password" className="pb-3">Password</label>
                                    <input name="password" className="my-3 border-slate-200 w-full h-10 px-3 ring-1 rounded-md placeholder-slate-400  focus:outline-none focus:ring focus:ring-blue-600/70 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
                              </div>

                              <div class="rowGroup px-3 my-3">
                                    <button className="block text-center bg-lime-400 w-full py-3 rounded-md uppercase text-white font-medium">Login</button>
                              </div>

                              <p className="my-2">You don&apos;t have account ? <span className="cursor-pointer text-lime-600">register</span></p>

                              <hr className="my-10"/>

                              <div class="rowGroup">
                                    <div class="buttonAuth cursor-pointer my-3 border-2 w-full flex items-center gap-4 justify-center p-3 rounded-md">
                                          <div class="icon text-2xl text-blue-600">
                                                <FaFacebook />
                                          </div>
                                          <button type="button" className=" text-black">Continue with Facebook</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}