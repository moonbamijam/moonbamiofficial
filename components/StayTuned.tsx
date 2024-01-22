type Props = {
  src: string | undefined
}

const StayTuned = async (props: Props) => {
  return (
    <div id="" className=" container relative">
      <section className="content pb-[300px] mt-[200px] lg:mt-[250px] flex flex-col gap-10 items-center justify-center">
        <h1 className="font-bold text-7xl text-center w-[700px]">Please stay tuned for this page!</h1>
        <img src={`${ props.src }`} alt="" className="w-[300px] h-[300px] object-cover rounded-full" />
      </section>
    </div>
  )
}

export default StayTuned