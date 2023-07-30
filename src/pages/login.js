
import { GoogleOutlined, GithubOutlined,FacebookOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form"
import auth from "@/firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [
    createUserWithEmailAndPassword,
    user,
   
  ] = useCreateUserWithEmailAndPassword(auth);
  console.log(user);
  if(user){
    router.push('/');
  }
  const {
    register,
    handleSubmit,

  } = useForm()
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email,data.password)
  }
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={() => signIn("google",{callbackUrl:"/"})}/> 
          <FacebookOutlined onClick={() => signIn("facebook",{callbackUrl:"/"})}/> 
          <GithubOutlined onClick={() => signIn("github",{callbackUrl:"/"})}/>
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input type="email" {...register("email", { required: true })}  />
          <label htmlFor="">Your Password</label>
          <input type="password"  {...register("password", { required: true })} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
