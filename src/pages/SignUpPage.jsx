import {Button, Card, CardBody, CardHeader, CardProvider, CardFooter ,Divider, Input } from "@heroui/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { email } from "zod/v4-mini";
import { axiosInstance } from '../lib/axios';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { SignUpContextProvider, SignUpContextConsumer } from "../context/SignUpContext";

const signUpFormSchema = z.object({
    email: z.string().email("Format email belum sesuai"),
    telephone: z.string().regex(/^\d+$/, "Telephone hanya boleh berisi angka").max(12, "Telephone maksimal 12 angka"),
    username: z.string().min(4, "Username harus terdiri dari 4 karakter atau lebih"),
    password: z.string().min(8, "Password harus teridri dari 8 karakter atau lebih"),
});

const fetchSignUpUser = async () => {
  try {
    const response = await axiosInstance.get("/users");
    console.log("Data users:", response.data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const SignUpPage = () => {
    // const title = "Sign up Page";
    const form = useForm({
        mode: "onChange",
        resolver: zodResolver(signUpFormSchema),    
        defaultValues: {
            email: "",
            telephone: "",
            username: "",
            password: "",
        },
    });

const registerUser = async (data) => {
  try {
    // POST ke json-server
    const response = await axiosInstance.post("/users", data);
    alert("User registered! Lihat console/log");
    console.log("Data submitted:", response.data);

    // Optional: Fetch ulang semua user setelah submit
    fetchSignUpUser();

    // Reset form
    form.reset();
  } catch (error) {
    alert("Gagal mendaftarkan user");
    console.error("Error submitting:", error);
  }
};

    return (
    <SignUpContextProvider >
        <Header />
        <SignUpContextConsumer>
            {
                (context) => {
                    return <p className="text-center font-semibold">{context.title}</p>
                }
            }
        </SignUpContextConsumer>
        <div className="flex h-screen items-center justify-center">
            <Card className="w-[300px]">
                <CardHeader className="font-semibold text-lg">Sign up!</CardHeader>
                <Divider />
                <CardBody>
                    <form onSubmit={form.handleSubmit(registerUser)} action="" className="flex flex-col gap-4">

                    <Controller 
                        name="email"
                        control={form.control}
                        render={({field, fieldState}) => {
                            return <Input {...field} type="email" label="Email" size="sm" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message}/>
                        }}
                    />
                    <Controller 
                        name="telephone"
                        control={form.control}
                        render={({field, fieldState}) => {
                            const handleChange = (e) => {
                                const value = e.target.value;
                                // Cek apakah hanya angka
                                if (/^\d*$/.test(value) && value.length <= 12) {
                                    field.onChange(value);
                                    }
                                };
                            return <Input {...field} value={field.value || ""} onChange={handleChange} type="text" label="Telephone" size="sm" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message}/>
                        }}
                    />
                    <Controller 
                        name="username"
                        control={form.control}
                        render={({field, fieldState}) => {
                            return <Input {...field} type="text" label="Username" size="sm" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />
                        }}
                    />
                    <Controller 
                        name="password"
                        control={form.control}
                        render={({field, fieldState}) => {
                            return <Input {...field} type="password" label="Password" size="sm" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message}/>
                        }}
                    />
                    <Button type="submit" color="primary" >
                        Sign up
                    </Button>

                    </form>
                </CardBody>
                <CardFooter>
                    <Link to="/wishlist">To Wishlist Page</Link>
                </CardFooter>
            </Card>
        </div>
    </SignUpContextProvider>
    );
};

export default SignUpPage;