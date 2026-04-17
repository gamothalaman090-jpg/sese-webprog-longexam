import { NavLink } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ShieldCheck, Truck, Star, Sparkles } from 'lucide-react';
import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={banner}
                        alt="Campus Background"
                        className="h-full w-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs font-bold uppercase tracking-widest">
                                <Sparkles className="h-3 w-3" />
                                <span>Official NU Collection 2024</span>
                            </div>
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
                                WELCOME TO <br />
                                <span className="text-gradient italic">BULLDOGEX.</span>
                            </h1>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
                            Explore campus uniforms, student essentials, and school merch in one quick storefront.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button to="/products" className="px-10 py-4 text-lg">
                                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button to="/about" variant="secondary" className="px-10 py-4 text-lg">
                                About
                            </Button>
                        </div>
                    </div>
                </div>

            </section>

            {/* Quick Shopping Blocks / Store Overview */}
            <section className="py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-10">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-1">
                            Store Overview
                        </p>
                        <h2 className="text-2xl font-black text-white tracking-tight">
                            Quick shopping blocks
                        </h2>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { count: '08', label: 'Products', icon: ShoppingBag },
                            { count: '06', label: 'Categories', icon: Star },
                            { count: '24', label: 'Orders', icon: Truck },
                            { count: '03', label: 'Pickup Slots', icon: ShieldCheck },
                        ].map((block, idx) => (
                            <div
                                key={idx}
                                className="glass p-7 rounded-2xl group transition-all duration-300 hover:border-primary-500/40 hover:bg-bg-surface-lighter cursor-default"
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-5 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-300">
                                    <block.icon className="h-5 w-5" />
                                </div>

                                {/* Number */}
                                <p className="text-4xl font-black text-white leading-none tracking-tight mb-2 group-hover:text-primary-400 transition-colors duration-300">
                                    {block.count}
                                </p>

                                {/* Label */}
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                                    {block.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Collections */}
            <section className="py-24 bg-bg-surface/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="space-y-4">
                            <p className="text-primary-500 font-bold uppercase tracking-widest text-sm">
                                The Catalog
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                                FEATURED <br /> COLLECTIONS
                            </h2>
                        </div>
                        <Button to="/products" variant="secondary">View Apparel</Button>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: 'Daily Essentials',
                                desc: 'Bags, tumblers, lanyards, and items used every school day.',
                                img: '🎒',
                                count: '12 Items'
                            },
                            {
                                title: 'Study Supplies',
                                desc: ' Notes, desk tools, and study kits for class and review weeks.',
                                img: '📚',
                                count: '08 Items'
                            },
                            {
                                title: 'Campus Apparel',
                                desc: 'Comfortable pieces for class days, commute days, and weekends.',
                                img: '👕',
                                count: '15 Items'
                            },
                        ].map((category, idx) => (
                            <div
                                key={idx}
                                className="group relative overflow-hidden rounded-3xl aspect-[4/5] glass"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent z-10"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-8xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                                    {category.img}
                                </div>

                                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end gap-2">
                                    <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">{category.count}</span>
                                    <h3 className="text-2xl font-black text-white">{category.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{category.desc}</p>
                                    <NavLink to="/products" className="inline-flex items-center text-white font-bold group/link">
                                        Explore <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;



