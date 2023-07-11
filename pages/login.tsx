import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import Task from "/icons/task";

const LoginPage = () => {
    return (
        <div className="p-4 md:p-16 w-full h-screen relative">
            {/* <section className="hidden md:block"></section> */}
            <section className="flex flex-col md:mx-auto md:max-w-sm justify-between w-full h-full">
                <div>
                    {/* <Image
                        src="/icons/tasks.svg"
                        alt="Tasks"
                        width={50}
                        height={50}
                        className="absolute top-24 left-24 rotate-12"
                    /> */}
                    <h1 className="text-4xl text-center"></h1>
                </div>
                <div className="w-full">
                    <h2 className="text-3xl">Hi welcome back!</h2>
                    <p className="text-sm text-slate-500">
                        Enter your credentials to login.
                    </p>
                    <form className="flex flex-col gap-8 mt-8">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label className="mb-2" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <div className="w-full flex justify-between">
                                <Label className="mb-2" htmlFor="password">
                                    Password
                                </Label>
                                <Link
                                    href="/reset-password"
                                    className="text-xs md:text-sm hover:underline cursor-pointer"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <Link href="/">
                            <Button className="w-full">
                                <Mail className="mr-2 h-4 w-4" /> Login
                            </Button>
                        </Link>
                    </form>
                    <Separator className="my-4" />
                    <Link href="/">
                        <Button className="w-full">
                            <Image src={"/icons/google.svg"} alt="google" width="10" height="10" className="w-6 h-6 mr-2"/> Login with Google
                        </Button>
                    </Link>
                </div>
                <div className="w-full text-center">
                    <p className="text-xs md:text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="hover:underline">
                            Try for free.
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
