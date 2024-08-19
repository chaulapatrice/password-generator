import type {Metadata} from "next";
import localFont from 'next/font/local';
import "./globals.scss";

export const metadata: Metadata = {
    title: "Password Generator",
    description: "Password Generator",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/images/favicon-32x32.png" sizes="any"/>
        </head>
        <body>{children}</body>
        </html>
    );
}
