import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, LogIn } from "lucide-react";
import Link from "next/link";

const SignUpPage = () => {
    return (
        <div className="p-4 md:p-16 md:mx-auto w-full md:max-w-lg h-screen">
            <section className="hidden md:block"></section>
            <section className="flex flex-col justify-between w-full h-full">
                <div>
                    <h1></h1>
                </div>
                <div className="w-full">
                    <h2 className="text-3xl">Get started for free!</h2>
                    <p className="text-sm text-slate-500">
                        Enter your details to create your account.
                    </p>
                    <form className="flex flex-col gap-8 mt-8">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label className="mb-2" htmlFor="name">
                                Name
                            </Label>
                            <Input type="text" id="name" placeholder="Name" />
                        </div>
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
                            <Label className="mb-2" htmlFor="password">
                                Password
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label className="mb-2" htmlFor="reenter-password">
                                Re-Enter Password
                            </Label>
                            <Input
                                type="password"
                                id="reenter-password"
                                placeholder="Re-Enter Password"
                            />
                        </div>
                        <Button>
                            <Mail className="mr-2 h-4 w-4" /> Sign Up
                        </Button>
                    </form>
                </div>
                <div className="w-full text-center">
                    <p className="text-xs md:text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SignUpPage;
