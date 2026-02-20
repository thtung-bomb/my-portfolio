'use client';

import { faClockRotateLeft, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		message: '',
		opportunityType: '',
		subject: '',
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	// Initialize EmailJS when component mounts
	useEffect(() => {
		emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		try {
			const result = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
				{
					from_name: formData.fullName,
					from_email: formData.email,
					subject: formData.subject,
					opportunity_type: formData.opportunityType,
					message: formData.message,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
			);

			console.log('Email sent successfully:', result);
			setIsSubmitted(true);

			// Clear form
			setFormData({
				fullName: '',
				email: '',
				message: '',
				opportunityType: '',
				subject: '',
			});

			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		} catch (err) {
			console.error('EmailJS Error:', err);
			setError('Failed to send message. Please try emailing directly at thanhtung3523@gmail.com');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="relative min-h-screen w-full overflow-hidden bg-slate-950 py-10">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
			<div className="pointer-events-none absolute inset-0 opacity-30">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.08) 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			{/* Main Content */}
			<div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">
				<div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
					{/* Right Side - CTA & Socials */}
					<div className="order-2 lg:order-1 flex flex-col gap-12">
						<div className="space-y-6">
							<h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-white">
								Open to
								<br />
								<span className="bg-linear-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text">
									New Opportunities
								</span>
								<br />
								and Collaborations
							</h1>
							<p className="text-base font-medium leading-relaxed text-slate-400 max-w-md md:text-lg">
								I am a Software Engineering graduate actively seeking a Junior / Fresher position.
								I&#39;m eager to contribute to real-world projects, learn from experienced developers,
								and continuously improve my technical skills.
							</p>
						</div>

						{/* Contact Info Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
								<div className="flex items-center gap-3 mb-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-lg">
										<FontAwesomeIcon icon={faEnvelopeCircleCheck} className='text-white' />
									</div>
									<h3 className="font-bold text-white">Email</h3>
								</div>
								<a
									href="mailto:thanhtung3523@gmail.com"
									className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
								>
									thanhtung3523@gmail.com
								</a>
							</div>

							<div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
								<div className="flex items-center gap-3 mb-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-lg">
										<FontAwesomeIcon icon={faClockRotateLeft} className='text-white' />
									</div>
									<h3 className="font-bold text-white">Response Time</h3>
								</div>
								<p className="text-sm text-slate-400">I typically respond within 24 hours.</p>
							</div>
						</div>

						{/* Social Links */}
						<div className="space-y-4">
							<p className="text-xs font-bold uppercase tracking-widest text-slate-500">Connect Elsewhere</p>
							<div className="flex items-center gap-4">
								<Link
									href="https://github.com/thtung-bomb"
									className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
									title="GitHub"
								>
									<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</Link>
								<Link
									href="https://www.linkedin.com/in/thanhtung35"
									className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
									title="LinkedIn"
								>
									<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.807 0-9.726h3.554v1.375c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.731 1.395 3.731 4.397v5.564zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.710 0-.956.771-1.71 1.955-1.71 1.184 0 1.915.754 1.94 1.71 0 .951-.756 1.71-1.94 1.71zm1.581 11.597H3.756V9.626h3.162v10.826zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
									</svg>
								</Link>
								<Link
									href="https://t.me/thanhtung3523"
									className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
									title="Telegram"
								>
									<FontAwesomeIcon icon={faTelegram} className="text-3xl" />
								</Link>
							</div>
						</div>
					</div>

					{/* Left Side - Contact Form */}
					<div className="order-1 lg:order-2 flex flex-col gap-8">
						<div className="space-y-2">
							<h2 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">Contact</h2>
							<p className="text-3xl font-bold text-white">Let&#39;s Connect</p>
						</div>

						{isSubmitted && (
							<div className="rounded-xl border border-green-600/30 bg-green-600/10 p-4 text-green-400">
								<p className="font-semibold">✓ Message sent successfully! I&#39;ll get back to you soon.</p>
							</div>
						)}

						{error && (
							<div className="rounded-xl border border-red-600/30 bg-red-600/10 p-4 text-red-400">
								<p className="font-semibold">{error}</p>
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2 group">
									<label className="text-xs font-semibold text-slate-400 group-focus-within:text-indigo-400 transition-colors">
										Full Name
									</label>
									<input
										type="text"
										name="fullName"
										value={formData.fullName}
										onChange={handleChange}
										placeholder="Your Name"
										required
										disabled={isLoading}
										className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-600 transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none disabled:opacity-50"
									/>
								</div>

								<div className="space-y-2 group">
									<label className="text-xs font-semibold text-slate-400 group-focus-within:text-indigo-400 transition-colors">
										Email Address
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="your.email@example.com"
										required
										disabled={isLoading}
										className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-600 transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none disabled:opacity-50"
									/>
								</div>
							</div>

							<div className="space-y-2 group">
								<label className="text-xs font-semibold text-slate-400 group-focus-within:text-indigo-400 transition-colors">
									Subject
								</label>
								<input
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									placeholder="Project Inquiry"
									required
									disabled={isLoading}
									className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-600 transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none disabled:opacity-50"
								/>
							</div>

							<div className="space-y-2 group">
								<label className="text-xs font-semibold text-slate-400 group-focus-within:text-indigo-400 transition-colors">
									Opportunity Type
								</label>
								<select
									name="opportunityType"
									value={formData.opportunityType}
									onChange={handleSelectChange}
									required
									disabled={isLoading}
									className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none appearance-none cursor-pointer disabled:opacity-50"
								>
									<option value="">Select an option</option>
									<option value="Full-time">Full-time Position</option>
									<option value="Internship">Internship</option>
									<option value="Freelance">Freelance / Collaboration</option>
									<option value="Other">Other</option>
								</select>
							</div>

							<div className="space-y-2 group">
								<label className="text-xs font-semibold text-slate-400 group-focus-within:text-indigo-400 transition-colors">
									Message
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Tell me about the role, opportunity, or how we can collaborate..."
									required
									rows={6}
									disabled={isLoading}
									className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-600 resize-none transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none disabled:opacity-50"
								/>
							</div>

							<button
								type="submit"
								disabled={isLoading}
								className="group flex w-full items-center justify-center gap-2 rounded-xl hover:cursor-pointer bg-indigo-600 px-8 py-4 font-bold text-white shadow-xl shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
							>
								<span>{isLoading ? 'Sending...' : 'Send Message'}</span>
								{!isLoading && (
									<svg
										className="h-5 w-5 transition-transform group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
									</svg>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}
