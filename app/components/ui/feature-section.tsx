"use client";

import * as React from "react";
import { HighlightGroup, HighlighterItem } from "./highlighter";
import { useTranslations } from "../../utils/translations";

export function FeatureSection() {
  const { t } = useTranslations();
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            {t("features.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("features.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Smart Contract Management */}
          <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              {t("features.items.contracts.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("features.items.contracts.description")}
            </p>
          </div>
          
          {/* Process Automation */}
          <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              {t("features.items.automation.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("features.items.automation.description")}
            </p>
          </div>
          
          {/* Advanced Analytics */}
          <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              {t("features.items.analytics.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("features.items.analytics.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 