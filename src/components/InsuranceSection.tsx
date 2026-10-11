"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, ClipboardCheck, Info } from 'lucide-react';

export function InsuranceSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F1E8]/70 text-text-dark relative overflow-hidden border-y border-border/40">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-forest-soft/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl border border-forest-soft/40 relative overflow-hidden"
        >
          {/* Top Gold Ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-gold/50"></span>
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-light border border-forest-soft/60">
              <ShieldCheck className="w-4 h-4 text-forest-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-primary">
                Patient Support
              </span>
            </div>
            <span className="h-[1px] w-8 bg-gold/50"></span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-forest-dark text-center leading-tight mb-6">
            Insurance Reimbursement Assistance
          </h2>

          {/* Core statement */}
          <p className="text-lg sm:text-xl text-forest-dark/90 font-normal leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Arogya Ayurveda Healthcare provides invoices and relevant medical documentation to support eligible patients with insurance reimbursement claims.
          </p>

          {/* 3 Step Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#FAF8F3] rounded-2xl p-6 border border-border/60 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-forest-light flex items-center justify-center mb-4 text-forest-primary">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-forest-dark mb-1">Itemized Invoices</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Official invoices detailing treatments and therapies for claim submission.
              </p>
            </div>

            <div className="bg-[#FAF8F3] rounded-2xl p-6 border border-border/60 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-forest-light flex items-center justify-center mb-4 text-forest-primary">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-forest-dark mb-1">Medical Reports</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Licensed practitioner consultation notes, prescriptions, and diagnosis summaries.
              </p>
            </div>

            <div className="bg-[#FAF8F3] rounded-2xl p-6 border border-border/60 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-forest-light flex items-center justify-center mb-4 text-forest-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-forest-dark mb-1">Claim Guidance</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Assistance with claim form documentation to ensure smooth processing.
              </p>
            </div>
          </div>

          {/* Disclaimer Banner */}
          <div className="bg-forest-light/60 rounded-2xl p-4 sm:p-5 border border-forest-soft flex items-start sm:items-center gap-3.5 text-left">
            <Info className="w-5 h-5 text-forest-primary flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-forest-dark/80 font-light leading-relaxed">
              <strong className="font-medium text-forest-dark">Please note: </strong>
              Reimbursement is subject to your insurance policy, coverage eligibility, exclusions and insurer approval.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
