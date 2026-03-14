import { useTranslation } from '../../hooks/useTranslation';
import { Accordion } from "../components/Accordion";

export default function Faqs() {
  const { t, tHtml } = useTranslation();

  return (
      <section className='relative bg-white dark:bg-black px-4 py-10 w-full'>
        <h5 className='text-black dark:text-white heading-1 text-center mb-5'>
          {t('layout.faqs.title')}
        </h5>
        <Accordion label={t('layout.faqs.general.label')} >
          <Accordion label={t('layout.faqs.general.items.0.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.0.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.1.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.1.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.2.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.2.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.3.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.3.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.4.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.4.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.5.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.5.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.6.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.6.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.7.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.7.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.8.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.8.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.9.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.9.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.10.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.10.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.11.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.11.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.12.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.12.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.13.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.13.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.14.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.14.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.15.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.15.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.general.items.16.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.general.items.16.answer')} />
          </Accordion>
        </Accordion>
        <Accordion label={t('layout.faqs.shop.label')}>
          <Accordion label={t('layout.faqs.shop.items.0.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.shop.items.0.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.shop.items.1.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.shop.items.1.answer')} />
          </Accordion>
        </Accordion>
        <Accordion label={t('layout.faqs.travel.label')} >
          <Accordion label={t('layout.faqs.travel.items.0.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.0.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.1.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.1.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.2.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.2.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.3.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.3.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.4.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.4.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.5.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.5.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.6.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.6.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.7.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.7.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.8.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.8.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.9.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.9.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.10.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.10.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.11.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.11.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.travel.items.12.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.travel.items.12.answer')} />
          </Accordion>
        </Accordion>
        <Accordion label={t('layout.faqs.dining.label')} >
          <Accordion label={t('layout.faqs.dining.items.0.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.dining.items.0.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.dining.items.1.question')}>
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.dining.items.1.answer')} />
          </Accordion>
        </Accordion>
        <Accordion label={t('layout.faqs.entertainment.label')} >
          <Accordion label={t('layout.faqs.entertainment.items.0.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.entertainment.items.0.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.entertainment.items.1.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.entertainment.items.1.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.entertainment.items.2.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.entertainment.items.2.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.entertainment.items.3.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.entertainment.items.3.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.entertainment.items.4.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.entertainment.items.4.answer')} />
          </Accordion>
          <Accordion label={t('layout.faqs.entertainment.items.5.question')} >
            <span dangerouslySetInnerHTML={tHtml('layout.faqs.entertainment.items.5.answer')} />
          </Accordion>
        </Accordion>

      </section>
  )
}
