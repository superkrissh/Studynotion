import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDropdownMenu } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDownArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import SubSectionModal from "./SubSectionModal";
import { BiSolidDownArrow } from "react-icons/bi";
import ConfirmationModal from "../../../../common/ConfirmationModal";
import {
  deleteSection,
  deleteSubSection,
} from "../../../../../services/operations/courseDetailsAPI";
import { IoFastFood } from "react-icons/io5";
import { setCourse } from "../../../../../slices/courseSlice";

const NestedView = ({ handleChangeEditSectionName }) => {
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [addSubSection, setAddSubSection] = useState(null);
  const [viewSubSection, setViewSubSection] = useState(null);
  const [editSubSection, setEditSubSection] = useState(null);

  const [confirmationModal, setConfirmationModal] = useState(null);
  // useEffect(() => {
  //   console.log("Rendering it again");
  // });
  const handleDeleteSection = async (sectionId) => {
    const result = await deleteSection(
      {
        sectionId,
        courseId: course._id,
      },
      token
    );
    // console.log("PRINTING AFTER DELETE SECTION", result);
    if (result) {
      dispatch(setCourse(result));
    }
    setConfirmationModal(null);
  };

  const handleDeleteSubSection = async (subSectionId, sectionId) => {
    const result = await deleteSubSection({ subSectionId, sectionId, token });
    if (result) {
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === sectionId ? result : section
      );
      const updatedCourse = { ...course, courseContent: updatedCourseContent };
      dispatch(setCourse(updatedCourse));
    }
    setConfirmationModal(null);
  };

  return (
    <>
      <div className="rounded-lg bg-richblack-700 p-6 px-8 mt-5 text-richblack-25">
        {course?.courseContent?.map((section) => (
          <details key={section._id} open>
            <summary className="flex items-center justify-between mb-2 gap-x-3  border-b-2 border-b-richblack-500">
              <div className="flex items-center gap-x-2">
                <RxDropdownMenu className="text-2xl" />
                <p className="text-base font-semibold">{section.sectionName}</p>
              </div>
              <div className=" flex items-center gap-x-2">
                <button
                  onClick={() =>
                    handleChangeEditSectionName(
                      section._id,
                      section.sectionName
                    )
                  }
                >
                  <MdEdit />
                </button>

                <button
                  onClick={() => {
                    setConfirmationModal({
                      text1: "Delete this Section",
                      text2: "All the lectures in this section wiil be deleted",
                      btn1Text: "Delete",
                      btn2Text: "Cancel",
                      btn1Handler: () => handleDeleteSection(section._id),
                      btn2Handler: () => setConfirmationModal(null),
                    });
                  }}
                >
                  <RiDeleteBin6Line />
                </button>
                <span>|</span>
                <BiSolidDownArrow className={`text-lg text-richblack-300`} />
              </div>
            </summary>
            {/* subsection */}
            <div className="w-[90%] mx-auto">
              {section?.subSection?.map((data) => (
                <div
                  key={data?._id}
                  onClick={() => setViewSubSection(data)}
                  className="flex items-center justify-between gap-x-3 border-b-2"
                >
                  <div className="flex items-center gap-x-2 ml-1">
                    <RxDropdownMenu className="text-xl font-semibold" />
                    <p className="text-base font-semibold">{data.title}</p>
                  </div>

                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-x-3"
                  >
                    <button
                      onClick={() =>
                        setEditSubSection({ ...data, sectionId: section._id })
                      }
                    >
                      <MdEdit />
                    </button>
                    <button
                      onClick={() =>
                        setConfirmationModal({
                          text1: "Delete this Sub Section",
                          text2: "selected Lecture will be deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: () =>
                            handleDeleteSubSection(data._id, section._id),
                          btn2Handler: () => setConfirmationModal(null),
                        })
                      }
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setAddSubSection(section._id)}
                className="mt-4 ml-4 flex items-center gap-x-1 font-bold text-yellow-50"
              >
                <FaPlus className="font-bold" />
                <p>Add Lecture</p>
              </button>
            </div>
          </details>
        ))}
      </div>

      {addSubSection && (
        <SubSectionModal
          modalData={addSubSection}
          setModalData={setAddSubSection}
          add={true}
        />
      )}
      {viewSubSection && (
        <SubSectionModal
          modalData={viewSubSection}
          setModalData={setViewSubSection}
          view={true}
        />
      )}
      {editSubSection && (
        <SubSectionModal
          modalData={editSubSection}
          setModalData={setEditSubSection}
          edit={true}
        />
      )}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
};

export default NestedView;
