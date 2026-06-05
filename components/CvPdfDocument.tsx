import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Link, Font } from '@react-pdf/renderer';
import type { ResumeData } from '../types';
import type { Lang } from '../i18n';
import { labels } from '../i18n';
import { PdfMailIcon, PdfPhoneIcon, PdfLocationIcon, PdfLinkedInIcon, PdfGitHubIcon } from './PdfSvgIcons';

Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/inter-regular.ttf', fontWeight: 400 },
    { src: '/fonts/inter-bold.ttf', fontWeight: 700 },
  ],
});

const SIDEBAR_WIDTH = 210;
const PAGE_PADDING = 20;
const SECTION_GAP = 16;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Inter',
    fontSize: 10,
    backgroundColor: '#ffffff',
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    backgroundColor: '#1e293b',
    color: '#ffffff',
    padding: PAGE_PADDING,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: PAGE_PADDING,
    color: '#334155',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: '#64748b',
    marginBottom: 10,
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 700,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 9,
    color: '#cbd5e1',
    textAlign: 'center',
    lineHeight: 1.3,
  },
  sectionTitleSidebar: {
    fontSize: 11,
    fontWeight: 700,
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    borderBottomWidth: 1.5,
    borderBottomColor: '#64748b',
    paddingBottom: 4,
    marginBottom: 8,
    marginTop: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
    gap: 6,
  },
  contactText: {
    fontSize: 8.5,
    color: '#e2e8f0',
    lineHeight: 1.3,
  },
  contactLink: {
    fontSize: 8.5,
    color: '#cbd5e1',
    textDecoration: 'none',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillPill: {
    backgroundColor: '#475569',
    color: '#f1f5f9',
    fontSize: 7.5,
    fontWeight: 500,
    paddingHorizontal: 7,
    paddingVertical: 2.5,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  languageName: {
    fontSize: 8.5,
    color: '#ffffff',
  },
  languageLevel: {
    fontSize: 8.5,
    fontWeight: 500,
    color: '#94a3b8',
  },
  qrCode: {
    width: 72,
    height: 72,
    borderWidth: 3,
    borderColor: '#64748b',
    borderRadius: 4,
    alignSelf: 'center',
  },
  qrLabel: {
    fontSize: 7,
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 4,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1e293b',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    borderBottomWidth: 1.5,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 4,
    marginBottom: SECTION_GAP,
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: '#334155',
    marginBottom: 1,
  },
  jobMeta: {
    fontSize: 8.5,
    fontWeight: 600,
    color: '#64748b',
    marginBottom: 4,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 1.5,
  },
  bulletDot: {
    fontSize: 8.5,
    color: '#475569',
    width: 10,
  },
  bulletText: {
    fontSize: 8.5,
    color: '#475569',
    flex: 1,
    lineHeight: 1.4,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    marginTop: 10,
    marginBottom: 10,
  },
  subSectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: '#334155',
    marginBottom: 8,
  },
  eduTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#334155',
  },
  eduSubtitle: {
    fontSize: 8.5,
    color: '#64748b',
  },
  trainingTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#334155',
  },
  trainingDesc: {
    fontSize: 8.5,
    color: '#64748b',
  },
});

const iconMap: Record<string, React.FC> = {
  linkedin: PdfLinkedInIcon,
  github: PdfGitHubIcon,
};

const CvPdfDocument: React.FC<{ data: ResumeData; qrDataUrl: string; lang: Lang }> = ({ data, qrDataUrl, lang }) => {
  const t = labels[lang];
  const allSkills = [...data.skills.strong, ...data.skills.basic];

  return (
    <Document title={`CV - ${data.name}`} author={data.name}>
      <Page size="LETTER" style={styles.page} wrap={false}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <Image src={data.avatarUrl} style={styles.avatar} />
          <Text style={styles.nameText}>{data.name}</Text>
          <Text style={styles.titleText}>{data.title}</Text>

          <Text style={styles.sectionTitleSidebar}>{t.pdfContact}</Text>
          <View style={styles.contactItem}>
            <PdfMailIcon />
            <Text style={styles.contactText}>{data.contact.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <PdfPhoneIcon />
            <Text style={styles.contactText}>{data.contact.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <PdfLocationIcon />
            <Text style={styles.contactText}>{data.contact.location}</Text>
          </View>
          {data.contact.links.map((link) => {
            const IconComponent = iconMap[link.name];
            return (
              <View key={link.name} style={styles.contactItem}>
                {IconComponent && <IconComponent />}
                <Link src={link.href} style={styles.contactLink}>
                  {link.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </Link>
              </View>
            );
          })}

          <Text style={styles.sectionTitleSidebar}>{t.pdfSkills}</Text>
          <View style={styles.skillsContainer}>
            {allSkills.map((skill) => (
              <Text key={skill} style={styles.skillPill}>{skill}</Text>
            ))}
          </View>

          <Text style={styles.sectionTitleSidebar}>{t.pdfLanguages}</Text>
          {data.skills.languages.map((langItem) => (
            <View key={langItem.lang} style={styles.languageRow}>
              <Text style={styles.languageName}>{langItem.lang}</Text>
              <Text style={styles.languageLevel}>{langItem.level}</Text>
            </View>
          ))}

          <View style={{ marginTop: 'auto', alignItems: 'center' }}>
            {qrDataUrl && <Image src={qrDataUrl} style={styles.qrCode} />}
            <Text style={styles.qrLabel}>{t.pdfQrLabel}</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.sectionHeading}>{t.pdfMainHeading}</Text>

          {data.experience.map((item, index) => (
            <View key={`exp-${index}`} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobMeta}>{item.company} | {item.period}</Text>
              {item.description.map((desc, i) => (
                <View key={i} style={styles.bulletItem}>
                  <Text style={styles.bulletDot}>{'• '}</Text>
                  <Text style={styles.bulletText}>{desc}</Text>
                </View>
              ))}
            </View>
          ))}

          <View style={styles.divider} />
          <Text style={styles.subSectionTitle}>{t.pdfEducation}</Text>
          {data.education.map((item, index) => (
            <View key={`edu-${index}`} style={{ marginBottom: 6 }}>
              <Text style={styles.eduTitle}>{item.title}</Text>
              <Text style={styles.eduSubtitle}>{item.subtitle} | {item.period}</Text>
            </View>
          ))}

          <View style={styles.divider} />
          <Text style={styles.subSectionTitle}>{t.pdfTraining}</Text>
          {data.training.map((item, index) => (
            <View key={`trn-${index}`} style={{ marginBottom: 6 }}>
              <Text style={styles.trainingTitle}>{item.title}</Text>
              <Text style={styles.trainingDesc}>{item.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default CvPdfDocument;