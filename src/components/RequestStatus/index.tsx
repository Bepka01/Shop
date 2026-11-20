import { useTranslation } from 'react-i18next'

interface PropsType {
  error: string | null
  onRetry: () => void
  loading: boolean
}

export const RequestStatus = ({ error, onRetry, loading }: PropsType) => {
  const { t } = useTranslation()
  if (loading) {
    return <p>{t('common.loading')}</p>
  }

  if (error) {
    return (
      <div>
        <p>{t(`errors.${error}`)}</p>
        <button onClick={onRetry}>{t('common.retry')}</button>
      </div>
    )
  }
  return null
}
