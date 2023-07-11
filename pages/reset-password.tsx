import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ResetPasswordPage = () => {
    return (
        <div className="p-4 md:p-16 md:mx-auto w-full md:max-w-lg h-screen">
            <section className="hidden md:block"></section>
            <section className="flex flex-col justify-between w-full h-full">
                <div>
                    <h1></h1>
                </div>
                <div className="w-full">
                    <h2 className="text-3xl">Reset Password</h2>
                    <p className="text-sm text-slate-500">
                        Enter your email linked to your account.
                    </p>
                    <form className="flex flex-col gap-4 mt-8">
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
                        <Button>Send</Button>
                    </form>
                </div>
                <div className="w-full text-center">
                    <p className="text-xs md:text-sm">
                        Back to{" "}
                        <Link href="/login" className="hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ResetPasswordPage;
