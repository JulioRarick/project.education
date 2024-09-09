import { BsArrowUp } from 'react-icons/bs'
import ScrollToTop from 'react-scroll-up'

export function ScrollToTopButton() {
  return (
    <ScrollToTop showUnder={160}>
      <div className="fixed bottom-8 right-6 z-50 flex cursor-pointer items-center justify-center rounded-md bg-cyan-600 p-2 shadow-md hover:bg-cyan-500">
        <BsArrowUp className="h-6 w-6 text-white" />
      </div>
    </ScrollToTop>
  )
}
